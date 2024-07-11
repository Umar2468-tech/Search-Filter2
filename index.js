// // let data = fetch("https://jsonplaceholder.typicode.com/users");
// // data.then((umar)=>{
// //     // console.log(umar)
// //     return umar.json();
// // }).then((items)=>{
// //     console.log(items)
// // }).catch((err)=>[
// //     console.log(err)
// // ])

// // let data = new Promise((resolve, reject)=>{
// //         setTimeout(() => {
// //             resolve  (10)
// //         }, 1000);
// // })
// // data.then((item)=>{
// //     console.log("1st", item)
// //     return (item * 2);
// // })
// // .then((umar)=>{
// //     console.log("2nd" , umar)
// // })

// // let data  = new Promise((resolve, reject)=>{
// //     setTimeout(() => {
// //         reject("Accepted")
// //     }, 1000);
// // })
// // data.finally((item)=>{
// //     console.log("your data = " ,item)
// //     // return item;
// // })

// // let data = Promise.race([
// //     new Promise((resolve, reject)=>{
// //         setTimeout(() => {
// //             resolve("Reoslve in 3 econds")
// //         }, 3000);
// //     }),
// //     new Promise((resolve, reject)=>{
// //         setTimeout(() => {
// //             reject("Reoslve in 5 econds")
// //         }, 5000);
// //     }),
// //     new Promise((resolve, reject)=>{
// //         setTimeout(() => {
// //             resolve("Reoslve in 9 econds")
// //         }, 9000);
// //     })
// // ])
// // data.then((item)=>{
// //     console.warn(item)
// // }).catch((err)=>{
// //     console.warn("error promis is =",err)
// // })

// // let data = fetch("https://jsonplaceholder.typicode.com/users");
// // console.log(data);
// // data.then((item)=>{
// //     return item.json()
// // }).then((item)=>{
// //     console.log(item)
// // })

// // .catch((err)=>{
// //  console.log("Api", err)
// // })

// // let data = new Promise((resolve, reject)=>{
// // setTimeout(() => {
// //     resolve(20)
// // }, 1000);
// // })
// // data.then((item)=>{
// //     console.log("1st",item)
// //     return item * 20
// // }).then((items)=>{
// //  console.log("2nd", items)
// // })

// // let data = Promise.race([
// //     new Promise((resolve, reject)=>{
// //         setTimeout(() => {
// //             resolve("Your data has been resolved in 1s")
// //         }, 1000);
// //     }),
// //     new Promise((resolve, reject)=>{
// //         setTimeout(() => {
// //             reject("Your data has been resolved in 3s")
// //         }, 3000);
// //     }),
// //     new Promise((resolve, reject)=>{
// //         setTimeout(() => {
// //             resolve("Your data has been resolved in 6s")
// //         }, 6000);
// //     })
// // ])
// // data.then((item)=>{
// //     console.log(item)
// // })

// // let data = fetch("https://jsonplaceholder.typicode.com/users");
// // console.log(data)
// // data.then(async (item)=>{
// //     // console.log(item)
// //     const ali = await item.json();
// //     console.log(ali);
// // }).catch((err)=>{
// //     console.log(err)
// // })

// // let data = fetch("https://jsonplaceholder.typicode.com/users");
// // console.log(data)
// // data.then((item)=>{
// //     console.log(item)
// //     return item.json()
// //     .then((ali)=>{
// //         console.log(ali)
// //     })
// // }).catch((err)=>{
// //     console.log(err)
// // })

// // let data = new Promise((res, rej)=>{
// //    const number =  Math.floor(Math.random()*10)
// //     console.log(number)
// //     if(number<5){
// //         rej("Above then 5 ")
// //     }else{
// //         res("Below than 5 ")
// //     }
// // })

// // data.then(()=>{
// //     console.log("Above")
// // }).catch(()=>{
// //     console.log("Below")
// // })

// //  async function umar(){
// //     let data = await fetch("https://randomuser.me/api/");
// //     let ans  = await data.json();
// //     console.log(ans)
// // }

// // umar();

// async function data() {
//   let data = await fetch("https://randomuser.me/api/");
//  let res =  await data.json();
//     console.log(res)
// }

// const Arr = [
//     { url: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?w=100" },
//     { url: "https://images.unsplash.com/photo-1574285013029-29296a71930e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVydGljYWx8ZW58MHx8MHx8fDA%3D" },
//     { url: "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { url: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { url: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
//   ];

// document.querySelector("#center").addEventListener(
//   "mousemove",
//   myFunction((dets) => {
//     const div = document.createElement("div");
//     document.body.appendChild(div);
//     console.log(div);
//     const img = document.createElement('img');
//     div.classList.add("imagediv");
//     div.style.left = dets.clientX + "px";
//     div.style.top = dets.clientY + "px";
//     const randomIndex = Math.floor(Math.random() * Arr.length);
//     img.setAttribute('src', Arr[randomIndex].url);
//     div.appendChild(img)
//     gsap.to(img,{
//         y : "0",
//         ease : Power1,
//         duration  : .6,
//     })

//     gsap.to(img,{
//         y : "100%",
//         ease : Power3,
//         delay : .7,
//     })

//     setTimeout(() => {
//       div.remove();
//     }, 2000);
//   }, 400)
// );

// const myFunction = (func, delayTime) => {
//   let prev = 0;
//   return (...args) => {
//     let current = new Date().getTime();
//     console.log(current - prev, delayTime);
//     if (current - prev > delayTime) {
//       prev = current;
//       return func(...args);
//     }
//   };
// };

// document.querySelector('#center').addEventListener("mousemove", myFunction((dets)=>{
//      const div = document.createElement('div')
//      div.classList.add('imagediv')
//      document.body.appendChild(div)
//      div.style.left = dets.clientX + 'px'
//      div.style.top = dets.clientY + 'px'

//      const img = document.createElement('img')
//      img.setAttribute('src', "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?w=100" )
//      div.appendChild(img)

//      gsap.to(img,{
//         y : '0',
//         ease : Power1,
//         duration :  0.5,
//      })

//      gsap.to(img,{
//         y : '100%',
//         ease : Power2,
//         delay : .7,
//         duration :  0.5,
//      })

//      setTimeout(() => {
//         div.remove()
//      }, 2000);

//     }, 400));

// let button = document.querySelector('#btn');
// let loader = document.querySelector('.loader');
// let qr_img = document.querySelector('#qr-img');

// button.addEventListener('click', () => {
//     loader.style.display = "block";
//     qr_img.style.display = "none"

//     qr_img.onload = function() {
//         loader.style.display = "none";
//         qr_img.style.display = "block"
//     };

//     let data = document.querySelector('#input').value
//     console.log(data)
//     let api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`;

//     qr_img.src = api
// });

// window.addEventListener('mousemove',(dets)=>{
//   gsap.to('.container',{
//     left : dets.clientX,
//     top : dets.clientY,
//     ease : Power1,
//     delay : .1,
//   })
// })

// let button = document.querySelector('#btn')
// let loader = document.querySelector('.loader')
// let qr_img = document.querySelector('#qr-img')

// button.addEventListener("click",()=>{
//     loader.style.display = "block"

//     // qr_img.onload = function(){

//     const data = document.getElementById('input').value
//     console.log(data);
//     setTimeout(() => {
//         const api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`
//         // qr_img.setAttribute('src',api)
//         loader.style.display = "none"
//         qr_img.src = api
//         console.log("qr image", qr_img)

//     }, 2000);
//     // }
// })

// let button = document.querySelector('#btn');
// let qr_img = document.querySelector('#qr-img');
// let loader = document.querySelector('.loader');

// button.addEventListener("click",()=>{
//     loader.style.display = "block"
//     qr_img.style.display = "none"
//     const input = document.querySelector('#input').value
//     console.log(input)
//     const api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`
//     qr_img.src = apig
// })

// qr_img.onload = ()=>{
//      loader.style.display = "none"
//     qr_img.style.display = "block"
// }

// window.addEventListener("mousemove", (dets) => {
//   // console.log(dets.clientX)
//   let rect = document.querySelector("#react")
//   const xvalue = gsap.utils.mapRange(0, window.innerWidth,
//     100+rect.getBoundingClientRect().width/2,
//     window.innerWidth - (100+rect.getBoundingClientRect().width/2),
// dets.clientX
//   );

//   let rect1 = document.querySelector("#react")
//   const value = gsap.utils.mapRange(0, window.innerHeight,
//     40+rect1.getBoundingClientRect().height/2,
//     window.innerHeight - (40+rect1.getBoundingClientRect().height/2),
// dets.clientY
//   );
//   gsap.to("#react", {
//     left: xvalue,
//     top: value,
//     ease  : Power3
//     // delay : .2
//   });
// });

// document.getElementById('send').addEventListener('click', () => {
//     const username = document.getElementById('username').value;
//     const message = document.getElementById('message').value;

//     if (username && message) {
//         const output = document.getElementById('output');
//         output.innerHTML += `<p><strong>${username}: </strong>${message}</p>`;
//         document.getElementById('message').value = '';
//     }
// });

const Arr = [
  {
    name: "Roses",
    img: "https://images.unsplash.com/photo-1550593854-87edb352e3be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJvc2VzfGVufDB8fDB8fHww",
  },
  {
    name: "Elephant",
    img: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Girl",
    img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Boy",
    img: "https://images.unsplash.com/photo-1504203772830-87fba72385ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym95fGVufDB8fDB8fHww",
  },
  {
    name: "Cat",
    img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww",
  },
  {
    name: "Dog",
    img: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RG9nfGVufDB8fDB8fHww",
  },
  {
    name: "Graphic card",
    img: "https://images.unsplash.com/photo-1587134160474-cd3c9a60a34a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Gaming Pc Setup",
    img: "https://images.unsplash.com/photo-1587302912306-cf1ed9c33146?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwcGMlMjBzZXR1cHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Gaming Pc",
    img: "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  },
  {
    name: "Gaming",
    img: "https://images.unsplash.com/photo-1603481546238-487240415921?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// function data(){
//     var clutter = "";
//     Arr.forEach((obj)=>{
//         clutter += `<div calss = "box">
//         <img src=${obj.img}>
//         <div/>`
//     })
//     console.log(clutter)

//     document.querySelector('.container').innerHTML = clutter

// }
// data();

// function Searchinput(){
//     const input = document.querySelector('#searchinput');
//     input.addEventListener('click',function(){
//         document.querySelector('.overlay').style.display = "block"
//     })

//     input.addEventListener('blur',function(){
//         document.querySelector('.overlay').style.display = "none"
//     })

//     input.addEventListener('input',function(){
//        const Arrdata =  Arr.filter(obj => obj.name.toLowerCase().startsWith(input.value.toLowerCase()));
//         console.log(Arrdata);
//         var clutter =  ""
//         Arrdata.forEach((obj)=>{
//             clutter += `<div>
//             <h3>${obj.name}<h3/>
//             <div/>`
//             document.querySelector('.searchdata').style.display = "block"
//             document.querySelector('.searchdata').innerHTML = clutter;
//         })
//     })
// }

// Searchinput();

function data() {
  var clutter = "";
  Arr.forEach((obj) => {
    clutter += `<div>
        <img src= ${obj.img} >
        <div/>`;
    document.querySelector(".container").innerHTML = clutter;
  });
//   console.log(clutter);
}
data();
function Blurringdata() {
  const input = document.querySelector("#searchinput");
  input.addEventListener("click", () => {
    document.querySelector(".overlay").style.display = "block";
  });

  input.addEventListener("blur", () => {
    document.querySelector(".overlay").style.display = "none";
  });
}
Blurringdata();
function Handlingdata(){
    const input = document.querySelector("#searchinput");
    input.addEventListener('input',function(){
        const filteredArr = Arr.filter(obj => obj.name.toLowerCase().startsWith(input.value.toLowerCase()));
        console.log("your data = ",filteredArr);
        clutter = "";
        filteredArr.forEach((obj)=>{
            clutter += `<div>
            <h3>${obj.name}<h3/>
            <div/>` 
            document.querySelector(".searchdata").style.display = "block";
            document.querySelector(".searchdata").innerHTML = clutter;
        })
        
    })
}

Handlingdata();
