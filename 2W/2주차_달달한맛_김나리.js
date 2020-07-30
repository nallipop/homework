<!Doctype html>
<html lang="ko">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
              integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
              crossorigin="anonymous">

        <!-- JS -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
                integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
                crossorigin="anonymous"></script>

        <!-- 구글폰트 -->
        <link href="https://fonts.googleapis.com/css?family=Stylish&display=swap" rel="stylesheet">


        <title>스파르타코딩클럽 | 나홀로 메모장</title>

        <!-- style -->
        <style type="text/css">
            * {
                font-family: 'Stylish', sans-serif;
            }

            .wrap {
                width: 900px;
                margin: auto;
            }

            .comment {
                color: blue;
                font-weight: bold;
            }

            #post-box {
                width: 500px;
                margin: 20px auto;
                padding: 50px;
                border: black solid;
                border-radius: 5px;
            }
        </style>
        <script>
            function openClose() {
                // 여기에 jQuery를 이용해 코드를 짤 예정
            }
        </script>

    </head>

    <body>
        <div class="wrap">
            <div class="jumbotron">
                <h1 class="display-4">나홀로 링크 메모장!</h1>
                <p class="lead">중요한 링크를 저장해두고, 나중에 볼 수 있는 공간입니다</p>
                <hr class="my-4">
                <p class="lead">
                    <button onclick="openClose()" id="btn-post-box" type="button" class="btn btn-primary">포스팅 박스 열기
                    </button>
                </p>
            </div>
            <div id="post-box" class="form-post">
                <div>
                    <div class="form-group">
                        <label for="post-url">아티클 URL</label>
                        <input id="post-url" class="form-control" placeholder="">
                    </div>
                    <div class="form-group">
                        <label for="post-comment">간단 코멘트</label>
                        <textarea id="post-comment" class="form-control" rows="2"></textarea>
                    </div>
                    <button type="button" class="btn btn-primary">기사저장</button>
                </div>
            </div>
            <div id="cards-box" class="card-columns">
                <div class="card">
                    <img class="card-img-top"
                         src="https://www.eurail.com/content/dam/images/eurail/Italy%20OCP%20Promo%20Block.adaptive.767.1535627244182.jpg"
                         alt="Card image cap">
                    <div class="card-body">
                        <a href="#" class="card-title">여기 기사 제목이 들어가죠</a>
                        <p class="card-text">기사의 요약 내용이 들어갑니다. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세 무궁화 삼천리 화려강산...</p>
                        <p class="card-text comment">여기에 코멘트가 들어갑니다.</p>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top"
                         src="https://www.eurail.com/content/dam/images/eurail/Italy%20OCP%20Promo%20Block.adaptive.767.1535627244182.jpg"
                         alt="Card image cap">
                    <div class="card-body">
                        <a href="#" class="card-title">여기 기사 제목이 들어가죠</a>
                        <p class="card-text">기사의 요약 내용이 들어갑니다. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세 무궁화 삼천리 화려강산...</p>
                        <p class="card-text comment">여기에 코멘트가 들어갑니다.</p>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top"
                         src="https://www.eurail.com/content/dam/images/eurail/Italy%20OCP%20Promo%20Block.adaptive.767.1535627244182.jpg"
                         alt="Card image cap">
                    <div class="card-body">
                        <a href="#" class="card-title">여기 기사 제목이 들어가죠</a>
                        <p class="card-text">기사의 요약 내용이 들어갑니다. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세 무궁화 삼천리 화려강산...</p>
                        <p class="card-text comment">여기에 코멘트가 들어갑니다.</p>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top"
                         src="https://www.eurail.com/content/dam/images/eurail/Italy%20OCP%20Promo%20Block.adaptive.767.1535627244182.jpg"
                         alt="Card image cap">
                    <div class="card-body">
                        <a href="#" class="card-title">여기 기사 제목이 들어가죠</a>
                        <p class="card-text">기사의 요약 내용이 들어갑니다. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세 무궁화 삼천리 화려강산...</p>
                        <p class="card-text comment">여기에 코멘트가 들어갑니다.</p>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top"
                         src="https://www.eurail.com/content/dam/images/eurail/Italy%20OCP%20Promo%20Block.adaptive.767.1535627244182.jpg"
                         alt="Card image cap">
                    <div class="card-body">
                        <a href="#" class="card-title">여기 기사 제목이 들어가죠</a>
                        <p class="card-text">기사의 요약 내용이 들어갑니다. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세 무궁화 삼천리 화려강산...</p>
                        <p class="card-text comment">여기에 코멘트가 들어갑니다.</p>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top"
                         src="https://www.eurail.com/content/dam/images/eurail/Italy%20OCP%20Promo%20Block.adaptive.767.1535627244182.jpg"
                         alt="Card image cap">
                    <div class="card-body">
                        <a href="#" class="card-title">여기 기사 제목이 들어가죠</a>
                        <p class="card-text">기사의 요약 내용이 들어갑니다. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세 무궁화 삼천리 화려강산...</p>
                        <p class="card-text comment">여기에 코멘트가 들어갑니다.</p>
                    </div>
                </div>
            </div>
        </div>
    </body>

</html>