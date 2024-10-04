const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b">
    <button
      className="w-full p-4 text-left focus:outline-none"
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold">{question}</span>
        <img
          className="h-6 w-6"
          src={isOpen ? "./icons/shrink.svg" : "./icons/expand.svg"}
          alt="logo"
        />
      </div>
    </button>
    {isOpen && <div className="text-gray-shade2 p-4 pt-0">{answer}</div>}
  </div>
);

export default AccordionItem;
