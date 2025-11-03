const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Екатерина Иванова. Все права защищены.
            </p>
          </div>
          
          <div className="flex gap-6 text-sm">
            <a
              href="#impressum"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Impressum
            </a>
            <a
              href="#datenschutz"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Datenschutzerklärung
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
