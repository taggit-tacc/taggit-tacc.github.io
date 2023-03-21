# Updating the website for dummies (And Ha-Ram)
## or: So you want to update this website?

Step Zero: If you haven't cloned a copy or pulled the latest version of the website,
	   now is the time to do so. Don't forget to pull out README.txt and 404.html 
	   from the repo first!

# CAUTION! AFTER THIS STEP THE REPO ON GITHUB WILL BE EMPTY, IF SOMETHING GOES WRONG USE
#	 git log TO LIST THE PAST COMMITS AND THEN git reset <hash of previous commits>
#	 TO RESET THE CHANGES.

Step One: run git init and then git rm -r * and push. this will remove all files from the repo.
	  This step is very important as otherwise, we'll have the old files still
	  in the repo which causes errors.

Step Two: Go to your local taggit repo. If your using a different branch run git checkout master
	  and pull the latest version of the master branch.

Step Three: use ng build --prod to build the project. If you don't make a production built, 
	    This will not work, as this compiles the code into a usable production website.
	    The output is stored in Taggit/dist.

Step Four: navigate into the /dist directory and copy absolutely everything into the website's
	   repo. Also, at this step copy over the preserved README.txt.
	   regardless, it seems like a 404.html file needs to be made every update, so make a new file named 404.html
	   then, open index.html, and copy absolutely everything to the new 404.html. This step can be done on github's
	   online text editor

Step Five: git init, git add *, git commit, and git push. The website is now updated, and
	   unless you did something weird, or these instructions are missing something,
	   changes should be applied in about five minutes.

# Error handling

A 404 error means that there is no 404.html present. For whatever reason, if we try to put up
a website without one, it refuses to read our index.html. The way the last guy got around this
was by copying the contents of index.html to a 404.html file, and that's what we will do until
someone figures out how to fix the error.

An 0auth error means that the website was not built for production. Build it again
with the --prod flag, and re-upload it. This error is caused by our security callback.
In development builds, we don't have one that properly matches what Design Safe is looking for,
so it refuses access.

Please add any other errors you find to this README, because I am certain there is more than
two ways to break this site. Also, if you manage to break the site in an epically unrecoverable
way, let me know, because first of all, I want to gawk at it, and secondly, I keep a backup of
last week's website.
