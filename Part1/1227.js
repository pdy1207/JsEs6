<div></div>
<script>
    'use strict'; //JS를 좀 더 엄격하게. === strict mode

    this 만 쓰면 window 나타냄.

    console.log(this);
    
    var object = { //object 내에 함수 실행. 
        date : 'kim',
        function : function(){
            console.log(this); //나를 포함한 object
        }        
    }

    object.function(); //object 내에 함수안에서 this 는 ? 

    var object = {
        date : {
            function : () =>{
                console.log(this);
            }
        }
    }
    object.date.function();

    //기존 문법 function() {} => 신문법 ()=>{}


    
    document.getElementById('btn').addEventListener('click',function(e){
        // console.log(this);
        // console.log(e.currentTarget); 
        //지금 이벤트 동작하는 곳.

        var arr = [1,2,3];
        arr.forEach(function(a){
            console.log(this);
        }); //foreach 반복문 내부코드 3번 반복
    })


    var object = {
        name : ['김', '이', '박'],
        function : function(){
            console.log(this);
            object.name.forEach(()=>{ 
                //arrow function 특징 내부의 this 값을 변화시키지않음. (외부 this값 그대로 재사용 가능)
                console.log(this);
            })
        }
    }
    object.function(); 오브젝트 함수 실행


</script>
