import { useState, useEffect } from 'react';
import { useGetAllContent, useUpdateSection } from '../../../hooks/useQueries';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Save } from 'lucide-react';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';

export default function NextStepsEditor() {
  const { data: content, isLoading } = useGetAllContent();
  const updateSection = useUpdateSection();

  const [formData, setFormData] = useState({
    sectionTitle: '',
    content: '',
  });

  useEffect(() => {
    if (content?.nextSteps) {
      setFormData({
        sectionTitle: content.nextSteps.sectionTitle,
        content: content.nextSteps.content,
      });
    }
  }, [content]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await updateSection.mutateAsync({
        section: 'nextSteps',
        content: {
          sectionTitle: formData.sectionTitle,
          content: formData.content,
          images: content?.nextSteps.images || [],
        },
      });
      toast.success('Next Steps section updated successfully!');
    } catch (error) {
      console.error('Update error:', error);
      toast.error('Failed to update Next Steps section');
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
          <CardTitle>Conclusion & Next Steps</CardTitle>
          <CardDescription>
            Edit the implementation timeline and next steps
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Section Title</Label>
              <Textarea
                id="title"
                value={formData.sectionTitle}
                onChange={(e) =>
                  setFormData({ ...formData, sectionTitle: e.target.value })
                }
                placeholder="Next Steps"
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Implementation Timeline</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                placeholder="Describe implementation phases, timeframes, and activities..."
                rows={12}
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
