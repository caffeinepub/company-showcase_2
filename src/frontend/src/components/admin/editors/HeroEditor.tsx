import { useState, useEffect } from 'react';
import { useGetAllContent, useUpdateSection } from '../../../hooks/useQueries';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Save } from 'lucide-react';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';

export default function HeroEditor() {
  const { data: content, isLoading } = useGetAllContent();
  const updateSection = useUpdateSection();

  const [formData, setFormData] = useState({
    sectionTitle: '',
    content: '',
  });

  useEffect(() => {
    if (content?.hero) {
      setFormData({
        sectionTitle: content.hero.sectionTitle,
        content: content.hero.content,
      });
    }
  }, [content]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await updateSection.mutateAsync({
        section: 'hero',
        content: {
          sectionTitle: formData.sectionTitle,
          content: formData.content,
          images: content?.hero.images || [],
        },
      });
      toast.success('Hero section updated successfully!');
    } catch (error) {
      console.error('Update error:', error);
      toast.error('Failed to update hero section');
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
          <CardTitle>Hero Section</CardTitle>
          <CardDescription>
            Edit the main hero section content that appears at the top of the homepage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Company Name / Title</Label>
              <Input
                id="title"
                value={formData.sectionTitle}
                onChange={(e) =>
                  setFormData({ ...formData, sectionTitle: e.target.value })
                }
                placeholder="Aparna Natural Millets Producer Co. Ltd."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Tagline & Description</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                placeholder="Enter the hero section content..."
                rows={6}
              />
              <p className="text-xs text-muted-foreground">
                This content appears below the company name on the hero section
              </p>
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
