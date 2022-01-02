const quiz = [
    {
        question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
        answers: ['スーファミ','プレステ２','スイッチ','DS'],
        correct: 'DS'
    },
    {
        question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
        answers: ['MOTHER2','スーパーマリオブラザーズ３','スーパードンキーコング','星のカービィ'],
        correct: 'MOTHER2'
    },
    {
        question: 'ファイナルファンタジーIVの主人公の名前は？',
        answers: ['フリオニール','クラウド','ティーダ','セシル'],
        correct: 'セシル'
    }
];

let quizIndex = 0;
let quizLength = quiz.length;
let score = 0;




// const question = 'ゲーム市場、最も売れたゲーム機は次のうちどれ？';
// const answers = ['スーファミ','プレステ２','スイッチ','DS'];
// const correct = 'DS';



const $button = document.getElementsByTagName('button');

// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];

//クイズの問題部、選択肢を定義
const setupQuiz = ()=> {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex<$button.length){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
}}

setupQuiz();

//クイズ正解不正解のif文
const clickHandler = (e)=> {
    console.log(e);

    if(quiz[quizIndex].correct === e.target.textContent){
        alert('正解！');
        score++;
    }else{
        alert('不正解！');
    }
    
    quizIndex++;
    
    if(quizIndex<quizLength){
        setupQuiz();
    }else{
        alert('finish!あなたの正解数は'+score+'/'+quizLength+'です！');
    }
};

let handleIndex = 0;
console.log($button[handleIndex]);
// console.log(handleIndex);
while(handleIndex<$button.length){
    $button[handleIndex].addEventListener('click',(e)=>{
        clickHandler(e);
    });
    handleIndex++;
}




// $button[0].addEventListener('click',(e)=>{
//     clickHandler(e);
// });
// $button[1].addEventListener('click',(e)=>{
//     clickHandler(e);
// });
// $button[2].addEventListener('click',(e)=>{
//     clickHandler(e);
// });
// $button[3].addEventListener('click',(e)=>{
//     clickHandler(e);
// });

// console.log($button);