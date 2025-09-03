function DNAStrand(dna){
  //your code here
  var result= "";
		  for(var i =0; i<dna.length; i++) 
		  {
        if (dna[i]==="A") 
       {
        result +="T";
       }
        else if (dna[i]==="T") 
       {
        result += "A";
        }
        else if (dna[i]==="C")
        {
        result +="G";
        }
        else if (dna[i]==="G")
        {
        result += "C";
        }
        else {
        result +=dna[i];
        }
		 }
     return result;
	}

/*
S: take a string composed of these letters or some of them(A, T, C, G), and return them replaced by their correspondent(A<=>T, C<=>G), the string is never empty.
P: take a string composed of these uppercase letters or some of them(A,T, C, G) and the string is never empty
R: return the string with each letter having been replaced by their correspondent(A<=>T, C<=>G)
E:
dnaStrand("AAA")=> 'TTT'
dnaStrand("CGC")=> 'GCG'
dnaStrand("TA")=> 'AT'
*/
