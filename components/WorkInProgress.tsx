import { ImageOffIcon } from 'lucide-react';

export default function WorkInProgress() {
  return (
    <div className="flex h-full min-h-[16rem] w-full items-center justify-center rounded-lg border border-border/60 bg-muted/20 p-8">
      <div className="flex w-full max-w-[280px] flex-col items-center gap-4 text-center">
        <div className="inline-flex h-14 w-14 items-center justify-center text-muted-foreground">
          <ImageOffIcon className="h-8 w-8" />
        </div>

        <div className="space-y-2"></div>
      </div>
    </div>
  );
}
