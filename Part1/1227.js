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

</script>
