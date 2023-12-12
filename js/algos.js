// Converts from degrees to radians.
Number.prototype.toRadians = function() {
  return this * Math.PI / 180;
};


// Calculates the distance between Grenoble and the given city
function distanceFromGrenoble(city)
{ console.log(city)

  console.log("distanceFromGrenoble - implement me !");
  var GrenobleLat = 45.166667;
  var GrenobleLong = 5.716667;
  const R = 6371e3; // metres
  const φ1 = GrenobleLat * Math.PI/180; // φ, λ in radians
  const φ2 = (city.latitude) * Math.PI/180;
  const Δφ = ((city.latitude)-GrenobleLat) * Math.PI/180;
  const Δλ = ((city.longitude)-GrenobleLong) * Math.PI/180;

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  const d = R * c; // in metres
  return d
}
const counter = {
  nb_comparaison : 0,
  nb_swap : 0
}
// Swap 2 values in array csvData
// i is the index of the first city
// j is the index of the second city
function swap(i,j)
{
  tmp=csvData[i]
  csvData[i]=csvData[j]
  csvData[j]=tmp
  displayBuffer.push(['swap', i, j]); // Do not delete this line (for display)
  console.log("swap - implement me !");
  counter.nb_swap++
}

// Returns true if city with index i in csvData is closer to Grenoble than city with index j
// i is the index of the first city
// j is the index of the second city
function isLess(i, j)
{
  
  displayBuffer.push(['compare', i, j]); // Do not delete this line (for display)
  console.log("isLess - implement me !");
  counter.nb_comparaison++
  return distanceFromGrenoble(csvData[i])<distanceFromGrenoble(csvData[j])
}


function insertsort()
{   
  let n = csvData.length
  for (i=1;i<n;i++){
      tmp=csvData[i]
      j=i
      while(j>0 && isLess(j, j-1)){
          swap(j,j-1)
          j=j-1
      }
      csvData[j]=tmp
  }

  console.log("insertsort - implement me !");
}

function selectionsort()
{ 

  for ( i = 0;i < csvData.length; i++){
    
    j = i+1
    while (j < csvData.length){
        if (isLess(j,i)) {
            swap(i,j)
            
        }
        j++
    }
}

  console.log("selectionsort - implement me !");
}
//je fais remonter le plus grand comme une bulle
function bubblesort()
{ 
let m = csvData.length
for(i=1;i<m-1;i++){
  //boucle pour qu'il s'arrete au tableau désordonné
    for(j=0;j<m-i;j++){
        if(isLess(j+1,j)){
           swap(j,j+1)
        }
    }
} 

  console.log("bubblesort - implement me !");
}

function shellsort()
{ 
  
  console.log("tri de shell")
  let len = csvData.length
  let gap = Math.floor(len/2)
  while(gap>0){
      //je commence au gap et je verifie que le j ne sorte pas du tableau
      for (j=gap;j<len;j++){
          //je mets les deux indices au meme niveau
          let tmp=csvData[j]
          let i = j
          //je stock la valeur de j dans une variable temporaire
          
          while (i>=gap && isLess(i,i-gap)){
              swap(i,i-gap)
              
              i=i-gap
          }
          csvData[i] = tmp;
      }
      gap=Math.floor(gap/2)
  }
  
  console.log("shellsort - implement me !");
}

function mergesort()
{
  console.log("mergesort - implement me !");
}

function heapsort()
{
  console.log("heapsort - implement me !");
}

function quicksort(min=0, max= csvData.length)
{
  if (min<max){
    //je met le pivot sur la premiere valeur
    let pivot=min
    for(let index=min+1;index<max;index++){
        if(isLess(index,pivot)){
          //je swap pour mettre la plus petite valeur au niveau du pivot
          swap(index,pivot)
          //j'avance le pivot pour que la petite valeur se retrouve a sa gauche
          pivot++
          //apres avoir incrementé le pivot de 1 je swap pour qu'il reprenne sa valeur initiale
          swap(index,pivot)
        }
    }
//j'utilise la recursivite pour la partie gauche du pivot
quicksort(min,pivot)
//j'utilise la recursivité pour la partie droite du pivot
quicksort(pivot+1,max)
}

  console.log("quicksort - implement me !");
}
function quick3sort()
{
  console.log("quick3sort - implement me !");
}


function sort(algo)
{
  console.log(csvData[0])
  switch (algo)
  {
    case 'insert': insertsort();break;
    case 'select': selectionsort();break;
    case 'bubble': bubblesort();break;
    case 'shell': shellsort();break;
    case 'merge': mergesort();break;
    case 'heap': heapsort();break;
    case 'quick': quicksort();break;
    case 'quick3': quick3sort();break;
    default: throw 'Invalid algorithm ' + algo;
  }
  console.log(counter)
  counter.nb_comparaison=0
  counter.nb_swap=0
}
