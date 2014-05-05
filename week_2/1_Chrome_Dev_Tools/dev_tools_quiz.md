#### Include an inline screenshot of your codeschool's points from the profile page:
![Code School Points](http://i.imgur.com/yUUMoRp.png "CodeSchool Points")
<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS
       * Right Click on any Element on the Page and goto Inspect Element
  * Javascript Debugging
       * Open the console in the DevTools either by pressing ESC key on the elements tab or going to the Console tab.
  * Performance Optimization 
       * Using PageSpeed by Google
        
---

* What's the quick key for your OS to spawn the Dev Tools inspector?
 
Command + Option + I

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
      * Its #0b0f11
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

![PostMachina Site](http://i.imgur.com/I43ZPsb.png "PostMachina Site")

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.
      * Because its an image -> home_bg.gif 

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website?
      * 92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png <- Looks to be the largest image.
      
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
      * Either open devtools through the shortcut key or right click and goto inspect element, then goto the network tab
        and make sure record button turned on and refresh the page then click on the filter icon and check the images
        checkbox, then sort by size by clicking on the size column title.

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?
      * To Optimize the images, All the images could be compressed and optimized for the web for faster loading.
        Optimize the images to reduce their size by 885.9KiB (39% reduction) !!!
