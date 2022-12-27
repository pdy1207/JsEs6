<p id="hello">안녕</p>

<button id="button"> 버튼</button>
<script>
    //잠깐 자료 저장해두고 싶으면 변수 만들어서 쓰자.
    var name = 'kim';

    //자료를여러개 저장하려면
    var name = ['kim' , 'park',20]; //array
    name[0];
    var name = {name : 'kim' , age : 20} //object
    name.age;  name['age'];

    //HTML누르면 뭐 실행하고 싶을 때 이벤트 리스너
    document.getElementById('button').addEventListener('click' , ()=>{ 
        test('바보');
    });

    //코드 긴거 짧게 축약하려면 함수만들자
    //함수 다양하게 쓰려면 파라미터로 업그레이드
    function test(a){
        document.getElementById('hello').innerHTML= a;
    }

    //코드를 조건부로 실행하고 싶을때 if/else
    //등호 == 느슨한 비교 === 엄격.
    if(1 === 1){ // && and  || or 
        console.log('안녕');
    } else {
        console.log('안녕2');
    }

    //반복되는 코드를 줄이고 싶을때 for문.
    for(var i = 0; i < 3; i++){
        console.log('반복');
    }
    
    //forEach 문법
    [1,2,3,4].forEach(function(a){
        a
    })


</script>
