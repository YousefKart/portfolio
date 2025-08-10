interface toolItemProps {
  tool: string;
}

export function ToolItem({ tool }: toolItemProps) {
  return (
    <span className="bg-muted hover:bg-foreground/10 px-2 py-1 rounded text-sm transition duration-100 cursor-default">
      {tool}
    </span>
  );
}
