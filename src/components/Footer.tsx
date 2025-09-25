const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-secondary-foreground text-sm">
            © {currentYear} Redawn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;