#![allow(unused)]
use std::fs;

fn main()-> std::io::Result<()> {
    let file_path = "sample/acorn.js";

    let attr = fs::metadata(file_path )?;


    if let Ok(time) =attr.created() {
        println!("{time:?}");
    } else {
        println!("Not supported on this platform or filesystem");
    }      
    Ok(())
     
 }