import { ModelType } from '@/lib/types/ModelType';
import { MediaDisplay } from './MediaDiaplay';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface ModelModalProps {
  model: ModelType;
  isOpen: boolean;
  onClose: () => void;
}

export function ModelModal({ model, isOpen, onClose }: ModelModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="!w-[90vw] !max-w-[1000px] max-h-[80vh] overflow-auto">
        <DialogHeader className="space-y-3 pb-4">
          <DialogTitle className="text-2xl font-bold text-center">
            {model.title}
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            3D Model Preview
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-hidden rounded-xl bg-muted/20 p-2">
          <MediaDisplay
            src={model.image}
            title={model.title}
            className="rounded-lg w-full h-full object-contain"
          />
        </div>

        <DialogFooter className="pt-4">
          <p className="text-sm text-muted-foreground text-center w-full">
            This model was made for recreational purposes and is not for
            commercial use.
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
