import { ProjectType } from '@/lib/types/ProjectType';
import { MediaDisplay } from './MediaDiaplay';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, Code2, ImageIcon, Clock, FileText } from 'lucide-react';

interface ProjectModalProps {
  data: ProjectType;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ data, isOpen, onClose }: ProjectModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="!w-[90vw] !max-w-[800px] max-h-[90vh] overflow-auto">
        <DialogHeader className="space-y-2">
          <div className="flex items-center gap-3 justify-center">
            <DialogTitle className="text-3xl font-bold text-center">
              {data.title}
            </DialogTitle>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <DialogDescription className="text-center text-lg font-medium">
              {data.date}
            </DialogDescription>
            <span className="text-muted-foreground mx-2">•</span>
            <Clock className="h-4 w-4 text-muted-foreground" />
            <DialogDescription className="text-center text-lg font-medium">
              {data.duration}
            </DialogDescription>
          </div>
        </DialogHeader>

        <div className="overflow-auto space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              About this Project
            </h3>
            <p className="text-muted-foreground leading-relaxed text-base">
              {data.description}
            </p>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <ImageIcon className="h-5 w-5 text-primary" />
              Gallery
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {data.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-video overflow-hidden rounded-lg bg-muted/20"
                >
                  <MediaDisplay
                    src={image}
                    title={`${data.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Code2 className="h-5 w-5 text-primary" />
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {data.tools.map((tool, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-3 py-1 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter className="pt-6 border-t">
          <div className="w-full text-center">
            <p className="text-sm text-muted-foreground">
              This project is a personal and/or school project created for
              learning and showcasing purposes.
            </p>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
