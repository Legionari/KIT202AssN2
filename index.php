    <!DOCTYPE html>
    <html>
        <head>
            <title>Index</title>
            <meta charset="UTF-8" content=""width=device-width. initial-scale="1.0">
            <link rel="stylesheet" type="text/css" href="index.css">
        </head>
        <body>
    	<?php
    	require "dbconnect.php";	
    
    	$sql = "SELECT * FROM PostA2";
		if ($result = $conn->query($sql)) {
      		if ($result && $result->num_rows > 0) {
        		while ($row = $result->fetch_assoc()) {
                	
  
		//foreach ($result as $row)
       // {
    	?>
            <header>
                <h1 href="#" class="homeheader">Group x Blog</h1>
                <h2 class="dropdownMenu"></h2>
            </header>
            <u1 class="navbar">
                <li><a href="index.html">Home</a></li>
                <li><a href="archive.html">Archive</a></li>
                <li><a href="login.html">Login</a></li>
                <li><a href="create.html">Create Post</a></li>
                <li><a href="about.html">About</a></li>
            </u1>
			
			    <button class="button2" id="goTop">Go to top</button>
			
                <o1 class="blog-posts">
                    <li>
					
                        <h1 class="title" id="post1-title" name="post1-title"><?php echo $row["PostTitle"] . " By: " . $row["Poster"] . " Posted: " . $row["DatePosted"]; ?></h1>
                        <p class="text" id="post1-body" name="post1-body"><?php echo $row["PostContent"]; ?></p>
						
                    </li>
                    <li>
						<section class="scroll-container">
						    <div class="scroll-caption">
                                <h1 class="title" id="post2-title" name="post2-title"><?php echo $row["PostTitle"]; ?></p>
						    </div> 
                            <div class="scroll-element js-scroll fade-in">
                                <p class="text" id="post2-body" name="post2-body"><?php echo $row["PostContent"]; ?></p>
						    </div>
                        </section>
                    </li>
                    <li>
						<section class="scroll-container">
						<div class="scroll-caption">
                        <h1 class="title" id="post3-title" name="post3-title"><?php echo $row["PostTitle"]; ?></h1>
						</div> <div class="scroll-element js-scroll slide-left">
                        <p class="text" id="post3-body" name="post3-body"><?php echo $row["PostContent"]; ?></p>
						</div></section>
                    </li>
                    <li>
						<section class="scroll-container">
						<div class="scroll-caption">
                        <h1 class="title" id="post4-title" name="post4-title"><?php echo $row["PostTitle"]; ?></h1>
						</div> <div class="scroll-element js-scroll slide-right">
                        <p class="text" id="post4-body" name="post4-body"><?php echo $row["PostContent"]; ?></p>
						</div></section>
                    </li>
                </o1>
        		<?php 
        		}
            	}
            	}
				?>
                
                <script src="index.js"></script>
        
        </body>
    </html>