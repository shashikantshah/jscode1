<script>
function myFunction(x) {
  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "yellow";
  } else {
   document.body.style.backgroundColor = "pink";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
</script>


//memoized
<script>
   var cache = {};
        setInterval(function () {
            var element = document.querySelector('.setStyle');
            let WindowWidth = window.innerWidth - 20;
            if (WindowWidth in cache) {
                
            } else {
                cache[WindowWidth] = WindowWidth;
                    if (WindowWidth < 768) {
                        let setWidthValue = WindowWidth + "px";
                        element.style.setProperty('width', setWidthValue);
                    } else if (WindowWidth < 820) {
                        element.style.setProperty('width', '340px');
                    } else if (WindowWidth < 912) {
                        element.style.setProperty('width', '380px');
                    }
                    else {
                        element.style.setProperty('width', '420px');
                    }
            }
          
        });
  <script>
  
