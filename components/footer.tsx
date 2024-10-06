const Footer = () => {
  return (
    <footer className="mt-12 mb-8">
      <div className="max-w-5xl mx-auto px-5 flex justify-between gap-4">
        <p className="text-sm">
          Invoicipedia &copy; {new Date().getFullYear()}
        </p>
        <p className="text-sm">
          Created by Colby Fayock with Next.js, Xata, and Clerk
        </p>
      </div>
    </footer>
  );
};

export default Footer;
