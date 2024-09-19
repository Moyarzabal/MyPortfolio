document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("a[href='#skills']");
    const arrow = document.getElementById("arrow");

    if (navLinks.length === 0) {
      console.error("No nav links found with href='#skills'");
      return;
    }
  
    console.log("Nav links found:", navLinks.length);
  
    function updateNavLinks() {
        const targetHref = window.innerWidth <= 768 ? "#skills2" : "#skills";
        console.log("Window width:", window.innerWidth);
        console.log("Switching to:", targetHref);
    
        // すべての a タグのリンク先を更新
        navLinks.forEach((navLink) => {
          navLink.setAttribute("href", targetHref);
        });
    
        // img タグのクリックイベントを更新
        if (arrow) {
          arrow.onclick = function () {
            location.href = './' + targetHref;
          };
        }
    }
  
    // ページロード時に一度チェック
    updateNavLinks();
  
    // 画面サイズが変更されたときにリンクを更新
    window.addEventListener("resize", updateNavLinks);
  });
  