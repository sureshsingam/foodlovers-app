
import Image from "next/image";

export default function Header() {
    return(
    <Image 
        src="/icon.png" 
        alt="A server surrounded by magic sparkles." 
        width={200}
        height={200}
      />
    );

}