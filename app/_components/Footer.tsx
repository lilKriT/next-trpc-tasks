const Footer = () => {
  return (
    <footer
      className="flex justify-center border-t border-violet-500 shadow-[0_-3px_25px_3px] 
    shadow-violet-600/30"
    >
      <div className="container py-6 flex flex-col items-center gap-1 text-sm">
        <p>A website using Next13 and tRPC.</p>
        <p>
          Created by{" "}
          <a href="https://github.com/lilKriT" className="link">
            lilKriT
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
