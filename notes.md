#Headings
to create a heading add one to six "#" this determines the hierarchy and typeface size (less = bigger size and higher up)
making two or more github will make table of contents

#Styling Text
    bold, italics, strikethrough, etc
    bold == ** ** or __ __ --> **Bold**
        -ctrl + b
    italics == * * or _ _ --> _Italic_
        -ctrl + i
    -strikethrough == ~~ ~~ --> ~~Strike~~
    -bold and nested italic --> **How _bold_ of you**
    -all bold and italic  --> ***Italically bold***
    -subscript --> Subscript<sub>text</sub>
    -superscript --> What'<sup>sup</sup>

#Quoting Text
    -quote using >
        > My true mentor, my guiding moonlight.
    -automatically quote text in a comment by typing R or quote entire comment by clicking the three dots then quote reply

#Quoting Code
    -back ticks --> `git status` shows what files you need to commit
    -use triple back ticks to put code into a distinct block
    - Basic Git Commands
      ```
      git status
      git add .
      git commit
      ```

#Supported Color Models
    -you use back ticks to call out colors
        -supported color models will display the color next to the color info
        -This is dark blue in HEX `#00008B`.
        -This is dark red in RGB `rgb(139, 0, 0)`.
        -This is orange in HSL `hsl(38.8, 100%, 50%)`
        -supported color models can't have leading or trailing spaces in back ticks
        -visualzation onlt supported in issues, pull requests, and discussions

#Links
    -create an inline link by wrapping text in brackets then wrap url in paraenthesis
        -[Main Page of my Repo](https://github.com/cammaicey/startup)
        -command + k to create link
    -markdown hyplink by highlighting the text & **command + v**
    -to replace text with the link **command + shift + v**
#Section Links
    -link directly to a section in a rendered file by hovering over sec head to expose link symbol

#Relative Links
    -define relative likns and image paths in rendered files
    -relative link is a link that is relative to the current file
        -[This file is relative to this]**()** <-- put link or path here
    -the path of the link will be relative to current file
    -links starting with **/** will be relative to repo root
    -canuse all relative link operands like **./** and **../**
    -relative links are easier for users who clone repos
        -should use relative when refering to other files within reop

#Images
    -display images by adding **!** and wrapping alt text in **[]** then wrap link for image in **()**
        -alt text == short text with info about the image

#Specifying Theme an Image is Shown to
    -aka choosing if you want light or dark mode
    - An example from github
    ```
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/25423296/163456776-7f95b81a-f1ed-45f7-b7ab-8fa810d529fa.png">
         <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
        <img alt="Shows an illustrated sun in light mode and a moon with stars in dark mode." src="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
    </picture>
    ```