<p align="center">
  <img src="https://velog.velcdn.com/images/kimhscom/post/f5775a06-ced1-4297-ad2b-ab9be2f2cd27/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-09-19%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2010.13.31.png" height="350">
  <h2 align="center">Javascript ES6</h2>
  <p align="center">Javascript Advanced Course ๐ก<p>

  </p>
</p>



### ์ฌ์  ์ง์
 
    โป HTML / CSS ๊ธฐ์ด JavaScript ๊ธฐ์ด๊ฐ ํ์ํฉ๋๋ค.
      
  
### ES6 ๋ฌธ๋ฒ ์์๋ณด๊ธฐ
 
  ES๋, ECMAScript์ ์ฝ์์ด๋ฉฐ ์๋ฐ์คํฌ๋ฆฝํธ์ ํ์ค, ๊ท๊ฒฉ์ ๋ํ๋ด๋ ์ฉ์ด์ด๋ฉฐ, </br>
  ๋ค์ ์ซ์๋ ๋ฒ์ ์ ๋ปํ๊ณ  ES5๋ 2009๋ ES6๋ 2015๋์ ์ถ์๋์๋ค.
  
  
<hr>

### Java script ๊ธฐ๋ณธ๋ฌธ๋ฒ ์ด์ ๋ฆฌ


      <p id="hello">์๋</p>

      <button id="button"> ๋ฒํผ</button>
      <script>
          //์ ๊น ์๋ฃ ์ ์ฅํด๋๊ณ  ์ถ์ผ๋ฉด ๋ณ์ ๋ง๋ค์ด์ ์ฐ์.
          var name = 'kim';

          //์๋ฃ๋ฅผ์ฌ๋ฌ๊ฐ ์ ์ฅํ๋ ค๋ฉด
          var name = ['kim' , 'park',20]; //array
          name[0];
          var name = {name : 'kim' , age : 20} //object
          name.age;  name['age'];

          //HTML๋๋ฅด๋ฉด ๋ญ ์คํํ๊ณ  ์ถ์ ๋ ์ด๋ฒคํธ ๋ฆฌ์ค๋
          document.getElementById('button').addEventListener('click' , ()=>{ 
              test('๋ฐ๋ณด');
          });

          //์ฝ๋ ๊ธด๊ฑฐ ์งง๊ฒ ์ถ์ฝํ๋ ค๋ฉด ํจ์๋ง๋ค์
          //ํจ์ ๋ค์ํ๊ฒ ์ฐ๋ ค๋ฉด ํ๋ผ๋ฏธํฐ๋ก ์๊ทธ๋ ์ด๋
          function test(a){
              document.getElementById('hello').innerHTML= a;
          }

          //์ฝ๋๋ฅผ ์กฐ๊ฑด๋ถ๋ก ์คํํ๊ณ  ์ถ์๋ if/else
          //๋ฑํธ == ๋์จํ ๋น๊ต === ์๊ฒฉ.
          if(1 === 1){ // && and  || or 
              console.log('์๋');
          } else {
              console.log('์๋2');
          }

          //๋ฐ๋ณต๋๋ ์ฝ๋๋ฅผ ์ค์ด๊ณ  ์ถ์๋ for๋ฌธ.
          for(var i = 0; i < 3; i++){
              console.log('๋ฐ๋ณต');
          }

          //forEach ๋ฌธ๋ฒ
          [1,2,3,4].forEach(function(a){
              a
          })


      </script>
