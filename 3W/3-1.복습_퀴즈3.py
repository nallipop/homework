import requests
from bs4 import BeautifulSoup

# 타겟 URL을 읽어서 HTML를 받아오고,
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://sports.news.naver.com/kbaseball/record/index.nhn?category=kbo', headers=headers)

# HTML을 BeautifulSoup이라는 라이브러리를 활용해 검색하기 용이한 상태로 만듦
# soup이라는 변수에 "파싱 용이해진 html"이 담긴 상태가 됨
# 이제 코딩을 통해 필요한 부분을 추출하면 된다.
soup = BeautifulSoup(data.text, 'html.parser')

kbo=soup.select('#regularTeamRecordList_table>tr')

///<정답 1번째> : for 안에서 아예 .text 로 마무리 해주면 됨
for baseball in kbo:
    rank =baseball.select_one('th>strong').text
    team = baseball.select_one('td.tm>div>span').text
    win = baseball.select_one('td>strong').text
    # if rank is not None:
    if float(win) > 0.5:
        print(rank, team, win)


///<정답2번쨰>: 아래에서 .text로 마무리 하지 않은 경우
    for baseball in kbo:
        rank =baseball.select_one('th>strong')
        team = baseball.select_one('td.tm>div>span')
        win = baseball.select_one('td>strong')
          -> 이 의미는z <strong>0.01234</strong>  이라는 형태이기 때문에 아래에서 float(win) 이라고 해도 stong 이 글자를 숫자로 변경시키지를 못해서 에러남
            그래서 아래에서 float쓸때 .text 로 괄호 안에 넣어줘야 함
    if float(win.text) > 0.5:
        print(rank, team, win)
