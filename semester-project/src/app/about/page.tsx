export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-10">
      <div className="about-padding-main text-white text-center font-roboto-mono text-2xl">
        <p className=" width-about padding-p-about">Hello! My name is Marko. I’m from Croatia and I’m interested in becoming a computer engineer.
          I like coding, math, physics, electronics, philosophy, girls, you name it.
        </p>
        <p className=" width-about padding-p-about">I’m currently studying computer science at FESB in Split.
          I’m 23 years old and I spend my free time volunteering, reading, learning random stuff, etc. </p>
        <p className=" width-about padding-p-about">I enjoy coding in C and C++. Embedded computing is something I’m interested in. 
        Working 
        with 
        micro controllers might be stressful sometimes but when it works, it’s just so satisfying being able to physically see something you programmed work as intended.
        </p>
        <p className=" width-about padding-p-about">I’m not just interested in embedded software. I always wanted to try game development, or networking stuff, or be a systems designer.
        </p>
      </div>
    </main>
  );
}