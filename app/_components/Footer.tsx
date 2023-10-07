const Footer = () => {
  return (
    <footer className="bg-slate-200 flex justify-center">
      <div className="container py-4 flex flex-col items-center gap-1">
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
