## Caesar cipher CLI tool
**CLI tool should accept 4 options (short alias and full name):**

1.  **-s, --shift**: a shift
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --cli-action**: an action encode/decode


**Usage example:**<br><br>
    First of all, you need to go to the project folder:

     $ cd caesar-cipher

  After that you can start script usage like this:

    $ node caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"

    $ node caesar_cli --cli-action encode --shift 7 --input.txt --output output.txt

    $ node caesar_cli --cli-action decode --shift 7 --input.txt --output output.txt
