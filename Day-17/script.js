
function checkAnagram() {
      const firstWord = document.getElementById('word1').value.trim().toLowerCase();
      const secondWord = document.getElementById('word2').value.trim().toLowerCase();
      if (firstWord.length !== secondWord.length) {
        document.getElementById("result").textContent = "Not Anagram";
        return;
      }else{
        let sortedFirstWord = firstWord.split('').sort().join('');
        let sortedSecondWord = secondWord.split('').sort().join('');

        if(sortedFirstWord === sortedSecondWord){
            document.getElementById("result").textContent = "Anagrams";
        }else{
             document.getElementById("result").textContent = "Not Anagrams";
         
        }
         
      }
      
    }