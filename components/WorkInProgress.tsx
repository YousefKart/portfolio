import { ImageOffIcon } from 'lucide-react';

export default function WorkInProgress() {
  return (
    <div className="flex h-full min-h-[16rem] w-full items-center justify-center rounded-lg border border-dashed bg-muted/50 p-8">
      <div className="flex w-full max-w-[280px] flex-col items-center gap-4 text-center text-muted-foreground">
        <ImageOffIcon className="h-8 w-8" />
        <p className="text-sm">Coming Soon</p>
      </div>
    </div>
  );
}
