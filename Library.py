class Library:
	def __init__(self,booklist,lib_name):
		self.booklist=booklist
		self.lib_name=lib_name
		
	
	def display(self):
		for books in self.booklist:
			print(books)
	
	def add_book(self):
		bookname=input("What is the book you want to add ? ")
		return self.booklist.append(bookname)

	
	def lend_book(self):
		global lendbook , lender_name
		lender_name=input("What is your name ")
		lendbook=input("What is the book you want to lend ? ")
		self.lend_data={lender_name,lendbook}
		
		
		if lendbook in self.booklist and lender_name:
			 print("You sucessfully borrowed book")
			 
		else:
			print("Not available")			 
	
	
	def return_book(self):
			
		ret_book=input("What is the book you want to return ? ")
		try:
			if ret_book==lendbook:
				print("Thanks for returning book")
			
			
			
		except:
			
			print("No, you did not take the book")
		
			

tarun=Library(["Jane Eyer","Alice in Wonderland","The Jataka Tales","Harry Potter series","Percy Jackson series","ST"],"Tarun's library")

def main():
	print(f"\t\tWelcome to {tarun.lib_name} ")
	while(1):
		try:
			print("1 to Dispaly the books\n2 to Lend\n3 to Add book\n4 to Return book\n5 to Quit")
			choice=int(input("Enter your choice "))
			if choice==1:
				print("The books are\n")
				tarun.display()
				print()
		
			elif choice==2:
				tarun.lend_book()
				
			
			
			elif choice==3:
				tarun.add_book()
				print("Thanks for donating\n")
			
			elif choice==4:
				tarun.return_book()
			else:
				print("You exited from process")
				break

		
		except:
			print("Invalid input")
if __name__=="__main__":
	main()
