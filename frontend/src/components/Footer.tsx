import { Heart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'aparna-millets';

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Aparna Natural Millets
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Powered by Farmers. Trusted by Families. Empowering tribal farmers 
                and enhancing nutrition in Rayagada, Odisha.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => {
                      const element = document.querySelector('#about');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.querySelector('#vision');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Project Vision
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.querySelector('#contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Contact
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Rayagada District, Odisha</li>
                <li>
                  <a
                    href="tel:+919437372707"
                    className="hover:text-primary transition-colors"
                  >
                    +91 9437372707
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:bibhuti4011@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    bibhuti4011@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} Aparna Natural Millets Producer Co. Ltd. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Built with <Heart className="h-4 w-4 text-primary fill-primary" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
