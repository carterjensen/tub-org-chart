#!/bin/bash
# Sync the password-gated org plan deck to GitHub Pages.
# Source of truth: org_plan.html in CJ's vault (TUB Org Plan Build).
# This wraps it in a client-side SHA-256 gate (password: Transformation) and
# pushes it live at https://carterjensen.github.io/tub-org-chart/org-plan.html
set -e
REPO="$(cd "$(dirname "$0")" && pwd)"
SRC="/Users/carterjensen/Library/CloudStorage/GoogleDrive-cartersjensen@gmail.com/My Drive/CJ's Second Brain/TUB Org Plan Build/org_plan.html"
[ -f "$SRC" ] || { echo "Source deck not found: $SRC"; exit 1; }

cat > /tmp/_go.html <<'EOF'
<div class="auth-gate" id="auth-gate">
  <form class="auth-card" id="auth-form" autocomplete="off">
    <h1>Product &amp; Experience</h1>
    <div class="auth-sub">Org Plan &middot; $20M &rarr; $100M</div>
    <input type="password" id="auth-input" placeholder="Password" autocomplete="off" spellcheck="false">
    <button type="submit">Unlock</button>
    <div class="auth-error" id="auth-error"></div>
  </form>
</div>
<div id="app" hidden>
EOF

cat > /tmp/_gc.html <<'EOF'
</div>
<style>
  .auth-gate{position:fixed;inset:0;background:#1b3a2d;display:flex;align-items:center;justify-content:center;z-index:1000;padding:20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',system-ui,sans-serif;}
  .auth-card{background:#f8f7f4;border-radius:16px;padding:36px 32px 28px;max-width:380px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,.3);text-align:center;}
  .auth-card h1{font-size:20px;font-weight:800;color:#1b3a2d;margin:0;letter-spacing:-.3px;}
  .auth-card .auth-sub{font-size:12px;color:#888;margin:4px 0 24px;text-transform:uppercase;letter-spacing:.5px;font-weight:600;}
  .auth-card input{width:100%;padding:12px 14px;font-size:14px;border:2px solid #e5e3de;border-radius:8px;background:#fff;color:#1a1a1a;font-family:inherit;outline:none;box-sizing:border-box;}
  .auth-card input:focus{border-color:#2d5a45;}
  .auth-card button{width:100%;margin-top:12px;padding:12px 14px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;background:#1b3a2d;color:#fff;border:none;border-radius:8px;cursor:pointer;font-family:inherit;}
  .auth-card button:hover{background:#2d5a45;}
  .auth-error{margin-top:12px;font-size:12px;color:#dc2626;min-height:16px;font-weight:600;}
</style>
<script>
(function(){
  var EXPECTED_HASH='cf2a63375a57a64d79cc85ecb25f6da63e8700487d99eb7ee41cecad7882ebb2';
  var STORAGE_KEY='tub-org-plan-unlocked';
  async function sha256(t){var b=new TextEncoder().encode(t);var h=await crypto.subtle.digest('SHA-256',b);return Array.from(new Uint8Array(h)).map(function(x){return x.toString(16).padStart(2,'0');}).join('');}
  function unlock(){var g=document.getElementById('auth-gate');if(g)g.style.display='none';var a=document.getElementById('app');if(a)a.hidden=false;}
  function gate(){var f=document.getElementById('auth-form'),i=document.getElementById('auth-input'),e=document.getElementById('auth-error');f.addEventListener('submit',async function(ev){ev.preventDefault();if(!i.value)return;var h=await sha256(i.value);if(h===EXPECTED_HASH){sessionStorage.setItem(STORAGE_KEY,'1');unlock();}else{e.textContent='Incorrect password.';i.value='';i.focus();}});setTimeout(function(){i.focus();},50);}
  if(sessionStorage.getItem(STORAGE_KEY)==='1'){unlock();}else{gate();}
})();
</script>
EOF

awk -v go=/tmp/_go.html -v gc=/tmp/_gc.html '
function dump(f,  line){ while((getline line < f) > 0) print line; close(f) }
/<body>/ && o==0 { print; dump(go); o=1; next }
/<\/body>/ && c==0 { dump(gc); print; c=1; next }
{ print }
' "$SRC" > "$REPO/org-plan.html"

cd "$REPO"
if git diff --quiet org-plan.html 2>/dev/null && git ls-files --error-unmatch org-plan.html >/dev/null 2>&1; then
  echo "org-plan.html already in sync. Nothing to push."
  exit 0
fi
git add org-plan.html
git commit -m "Sync org plan deck (gated)" >/dev/null
git push
echo "Deployed: https://carterjensen.github.io/tub-org-chart/org-plan.html"
