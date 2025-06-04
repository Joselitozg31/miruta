'use client';

export default function Layout({ children, showAddButton, onAddClick, addLabel }) {
  return (
    <div>
      {children}
      {showAddButton && (
        <button className="add-fab" onClick={onAddClick} title={addLabel || 'Añadir'}>
          +
        </button>
      )}
    </div>
  );
}
