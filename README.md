# File manipulations using different langs

Scripts to search a directory for files that have not been modified for sometime.
A friend had as program that will not detect a file if is later than 30 days or so. 


## Languages

### Main 

- Deno => in progress
- Python => next
- Node => later
- Rust => if I'm lucky. 

### Others

- C/C++ => possibly
- GO => as of now not likely
- Zig
- Vlang



## Process for the script

1. Obtain file meta
    - last time file has been modified
    - convert dates to day of the year and carry on the year
1. Calculate the expiration date
    - var with current date
    - var with current date's year
    - from the day of the year subtract the days
    - if day var is less than 0 then will need to go to the previous year
1. Determine if the file will need to be updated
    - keep a count of files change / list of files
1. Search a directory for files
    - have a config file with file to look for / ignore , if none are set then check all
1. Make Script a Executable


## Extra Features TODO 

- find duplicate files in directory, with the amount of bites taken up