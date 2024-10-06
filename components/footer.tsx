const Footer = () => {
  return (
    <footer className="mt-12 mb-8">
      <div className="max-w-5xl mx-auto px-5 flex justify-between gap-4">
        <p className="text-sm">Invoices App</p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
