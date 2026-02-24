import { useState, useEffect } from 'react';
import { useGetContactInfo, useUpdateSection } from '../../../hooks/useQueries';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Loader2, Save } from 'lucide-react';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';

export default function ContactEditor() {
  const { data: contactInfo, isLoading } = useGetContactInfo();
  const updateSection = useUpdateSection();

  const [formData, setFormData] = useState({
    representative: '',
    email: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    if (contactInfo) {
      setFormData({
        representative: contactInfo.representative,
        email: contactInfo.email,
        phone: contactInfo.phone,
        address: contactInfo.address,
      });
    }
  }, [contactInfo]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    try {
      // Store contact info in a dedicated section
      await updateSection.mutateAsync({
        section: 'contact',
        content: {
          sectionTitle: 'Contact Information',
          content: JSON.stringify(formData),
          images: [],
        },
      });
      toast.success('Contact information updated successfully!');
    } catch (error) {
      console.error('Update error:', error);
      toast.error('Failed to update contact information');
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div>
      <Toaster />
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>
            Edit the contact details displayed on the website
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="representative">Contact Person Name</Label>
              <Input
                id="representative"
                value={formData.representative}
                onChange={(e) =>
                  setFormData({ ...formData, representative: e.target.value })
                }
                placeholder="Bibhuti Bhusana Mishra"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="bibhuti4011@gmail.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="+91 9437372707"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                placeholder="Rayagada District, Odisha, India"
              />
            </div>

            <Button
              type="submit"
              disabled={updateSection.isPending}
              className="w-full"
            >
              {updateSection.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
