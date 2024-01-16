function possiblyPerfect(key,answers) {
  count = 0;
  len = key.length;
  
  for(let i = 0; i < key.length; i++){
    if(key[i] == "_"){len--; continue;}
    if(key[i] == answers[i]){continue;}
    count++;
  }
  
  if(count == len || count == 0){
    return true;
  }
  return false;
}
