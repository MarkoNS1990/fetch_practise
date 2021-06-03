const scores = document.getElementById('scores')
const refresh = document.getElementById('refresh')
const name = document.getElementById('name')
const score = document.getElementById('scores')
const save = document.getElementById('save')

const addScore = ()=>{
    
    fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/OkpGb9kGsnyW0UjQgNEk/scores`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user:'Marko',
            score:'45'
        })
    }).then((res)=>res.json())
      .then((data)=>console.log(data))

}

    refresh.addEventListener('click',()=>{
        fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/OkpGb9kGsnyW0UjQgNEk/scores')
        .then((res)=>res.json())
        .then((data)=>{
            data.result.forEach((score)=>{
                scores.innerHTML+=`${score.user} ${score.score} <br>`
            });
            
        })
    })
   

  




