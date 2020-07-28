var roulette;
    function start(){
        var result = document.getElementById("result");
        var omikuji = ["ナヨン", "ジョンヨン", "モモ", "サナ","ジヒョ","ミナ","ダヒョン","チェヨン","ツウィ"];
        roulette = setInterval(function(){
            var random = Math.round(Math.random() * (omikuji.length - 1));
            result.innerHTML = omikuji[random];
        }, 10);
    }

    function stop(){
        clearInterval(roulette);
    }
