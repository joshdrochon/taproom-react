export function getFunName(){
  let adjectives = ['funny', 'obnoxious', 'stinky', 'fluffy', 'elemental', 'amazing', 'spooky'];
  let nouns = ['pickles', 'feet', 'phone', 'air-conditioner', 'ghost', 'feathers', 'cat'];
  let num1 = Math.floor(Math.random() * adjectives.length);
  let num2 = Math.floor(Math.random() * nouns.length);

  return 'Hey there, ' + adjectives[num1] + ' ' + nouns[num2] + '. What are you waiting for? Drop a comment...';
}

export function docWidthChecker(){
  let docWidth = document.documentElement.offsetWidth;
  [].forEach.call(
  document.querySelectorAll('*'),
    function(element){
      if(element.offsetWidth < docWidth){
        console.log(element);
      }else{
        console.log('no elements exceed the size of the window');
      }
    }
  );
}
