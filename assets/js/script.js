function toggleSidebar(listId) {
  // Hide all lists
  console.log("Item is " + listId)
  document.querySelectorAll('.list').forEach(function(list) {
    list.style.display = 'none';
  });
  
  // Show the selected list
  document.getElementById(listId).style.display = 'block';

  // Toggle the sidebar
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('d-none');
}