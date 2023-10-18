import Image from 'next/image'
import Link from 'next/link';

export default function About() {
  return (
    <div className = "w-screen h-[200vh] flex justify-center items-center">
      <div className = "w-screen md:w-3/5 h-[150vh] grid grid-flow-row place-items-center gap-8 md:gap-4 xl:gap-2 bg-[#F8F5F0]">
        <img
        className = "h-40 w-40 lg:h-48 lg:w-48 flex justify-center"
        src = "https://drive.google.com/uc?export=view?&id=1kKImZlWfNriucnQjCIrm9gmtoyCYFRvS"
        alt = "Logo">
        </img>
        <p className = "items-center px-12 text-sm md:text-md xl:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        At tempor commodo ullamcorper a lacus vestibulum sed arcu. Iaculis nunc sed augue lacus viverra vitae congue. 
        Eu nisl nunc mi ipsum. Varius vel pharetra vel turpis. Turpis egestas integer eget aliquet. 
        Id nibh tortor id aliquet lectus proin nibh nisl. In nibh mauris cursus mattis molestie a iaculis at erat. 
        Massa sapien faucibus et molestie ac feugiat sed. Vitae turpis massa sed elementum tempus egestas. 
        Suspendisse in est ante in nibh mauris. Etiam dignissim diam quis enim lobortis. 
        Magna etiam tempor orci eu lobortis elementum nibh.
        </p>
        <p className = "items-center px-12 text-sm md:text-md xl:text-lg">
        Lobortis mattis aliquam faucibus purus in massa tempor. 
        Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. 
        Bibendum arcu vitae elementum curabitur vitae nunc sed velit. 
        Egestas diam in arcu cursus euismod quis. Odio euismod lacinia at quis risus sed vulputate odio. 
        Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. 
        Enim facilisis gravida neque convallis a cras semper. 
        Id diam maecenas ultricies mi eget mauris pharetra. 
        Massa enim nec dui nunc. 
        Sapien nec sagittis aliquam malesuada bibendum.
        </p>
        <p className = "items-center px-12 text-sm md:text-md xl:text-lg">
        Consequat mauris nunc congue nisi vitae suscipit tellus. 
        Mauris augue neque gravida in fermentum. 
        Tellus molestie nunc non blandit. 
        At imperdiet dui accumsan sit amet nulla facilisi morbi. 
        Justo laoreet sit amet cursus. 
        Quam viverra orci sagittis eu volutpat odio. 
        Vulputate sapien nec sagittis aliquam malesuada. 
        Ut etiam sit amet nisl purus. Sed turpis tincidunt id aliquet. 
        Habitant morbi tristique senectus et netus et malesuada. 
        Nec feugiat nisl pretium fusce id velit ut tortor pretium. 
        Hac habitasse platea dictumst vestibulum rhoncus est. 
        Praesent tristique magna sit amet purus. 
        Faucibus vitae aliquet nec ullamcorper sit amet risus. 
        Mauris nunc congue nisi vitae.
        </p>
      </div>
    </div>
  );
};
