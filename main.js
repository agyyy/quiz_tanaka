
const quiz = [
    {
        question: '田中の高校の地元はどこ？',
        answers: ['東京','埼玉','茨城','神奈川','群馬'],
        correct: '埼玉',
    },
    {
        question: '井上の結婚式での村田の役職は何？',
        answers: ['受付','スピーチ','カメラ','出し物','二次会幹事'],
        correct: '受付',
    },
    {
        question: '田中の奥さんはだれ？',
        answers: ['白石ミカ','ゆみちゃん','まき','ななこ','みえこ'],
        correct: 'ななこ',
    },
    {
        question: '田中がオーストラリアで泥酔した際に介抱してくれたのはだれ？',
        answers: ['まき','まきの浮気相手','デイビット','オリバー','ジャック'],
        correct: 'デイビット',
    },
    {
        question: '風間の車はどこ産？',
        answers: ['イタリア','ドイツ','フランス','イギリス','アメリカ'],
        correct: 'フランス',
    },
    {
        question: '田中とななこが付き合いたて通っていたラブホの名前は？',
        answers: ['HOTEL WHITE','HOTEL MOON','HOTEL LOVERS','HOTEL SWEET','HOTEL DREAM'],
        correct: 'HOTEL LOVERS',
    },
    {
        question: '田中がまきとのデートで注文したカクテルの名前は？',
        answers: ['ジントニック','ハンター','ヘア・オブ・ザ・ドッグ','ピュア・ラブ','ハイ・ライフ'],
        correct: 'ピュア・ラブ',
    },
    {
        question: '高校を中退した田中が購入したコンテナの価格は？',
        answers: ['5千円','1万円','15万円','50万円','500万円'],
        correct: '15万円',
    },
]




let quizIndex = 0;
const $btn = document.getElementsByClassName('btn');
const $qes = document.getElementById('js-question');



const quizContent = function(){
    $qes.textContent = quiz[quizIndex].question;
    for(let index = 0; index < $btn.length; index++){
        $btn[index].textContent = quiz[quizIndex].answers[index];
}
}

quizContent();

let score = 0;

const quizFunction = function(){
    for(let btnIndex = 0; btnIndex < $btn.length; btnIndex++){
        $btn[btnIndex].addEventListener('click',(e) => {
            if(e.target.textContent === quiz[quizIndex].correct){
                alert('正解！！！')
                score++;
            }else{
                alert('不正解...正解は'+quiz[quizIndex].correct+'でした。')
            }
            quizIndex++;
            if(quizIndex < quiz.length){
                quizContent();
            }else{
                alert('あなたの正解数は'+ score +'/8です！！');
            }

        })
    } 
}

quizFunction();







class Yes {
    constructor(nakami){
        this.nakami = nakami;
    }
    uuu(price){
        console.log('値段は'+price+'円です。');
    }
    nnn(){
        console.log(this.nakami+'味です。')
    }
}

let iii = new Yes('anko');
iii.uuu(300);
iii.nnn();
