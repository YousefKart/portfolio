const listTextStyle = 'text-right w-48 text-lg mr-4 mt-1';
const listDiv1Style = 'w-48 h-4 border-2 relative';
const listDiv2Style = 'h-4 bg-white absolute top-0 left-0';

const SkillItem = ({ skill, width }: { skill: string; width: string }) => {
  return (
    <li className="flex">
      <p className={listTextStyle}>{skill}</p>
      <div className="relative mt-3 ml-4">
        <div className={listDiv1Style} />
        <div className={listDiv2Style} style={{ width }} />
      </div>
    </li>
  );
};

export default SkillItem;
