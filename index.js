$(document).ready(function() {
    var envelope = $("#envelope");
    var btnOpen = $("#open");
    var btnReset = $("#reset");
    var letterOverlay = $("#letter-overlay");

    // 打開信封
    function openEnvelope() {
        envelope.addClass("open").removeClass("close");
        createHearts();
    }

    // 關閉信封
    function closeEnvelope() {
        envelope.addClass("close").removeClass("open");
        $(".hearts").empty();
    }

    // 顯示完整信件
    function showFullLetter() {
        letterOverlay.fadeIn(); // 使用 fadeIn 顯示
    }

    // 隱藏完整信件
    function hideFullLetter() {
        letterOverlay.fadeOut(); // 使用 fadeOut 隱藏
    }

    // 事件處理
    btnOpen.click(function() {
        openEnvelope();
        //showFullLetter();  // 移除此行：按下「打開信」不再直接顯示大信
    });

    btnReset.click(function() {
        closeEnvelope();
    });

    envelope.click(function() {
        showFullLetter(); // 點擊信封時顯示完整信件
    });

    letterOverlay.click(function(e) {
        if (e.target === this) {
            // 點擊背景遮罩時才關閉
            hideFullLetter();
        }
    });
});

// 滑鼠移動時產生愛心
document.addEventListener("mousemove", function(e) {
    let heart = document.createElement("div");
    heart.classList.add("cursor-heart");

    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
});

