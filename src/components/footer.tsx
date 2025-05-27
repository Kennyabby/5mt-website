import { Factory, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Factory className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">5MT</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Leading experts in manufacturing and construction consulting services worldwide.
            </p>
          </div>
          <div className="lg:text-right">
            <div className="flex justify-start lg:justify-end space-x-4 mb-4">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <p className="text-slate-400">
              &copy; 2024 5MT. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
