#http://ekladata.com/qgMRgMPbBsA1lYr3C-h9Kfr4iuE/liste-de-mots-C3-classes-par-theme.pdf

import random

with open("mots.txt", encoding="utf-8") as file:
    data = file.read()
    data = data.split()
#    print(m)
# with open("mots3.txt", encoding="utf-8") as file:
#     data2 = file.read()
#     data2 = data2.split()
#     print(data2)

#CATEGORIES

Animals = ['cats', 'Horses', 'Dogs', 'Birds', 'Pisces', 'rodents', 'turtles']
Fanof = ['topicality', 'Friends', 'Coffee', 'Decoration', 'Ecology', 'and', 'bio', 'Humor,', 'unusual', 'Fashion',
         'Museums,', 'exhibitions', 'People', 'Health', 'science']
Musicalinstruments = ['Accordion', 'Drums,', 'percussion', 'singing', 'Flute,', 'wood', 'Bass', 'guitar', 'Harmonica',
                      'Piano,', 'keyboards', 'Saxophone', 'Trumpet,', 'brass', 'Violin,', 'strings']
readings = ['Comics', 'testing', 'History,', 'human', 'sciences', 'novels', 'Detective', 'novels', 'Science',
            'fiction', 'Practical life']
Hobbies = ['Arts', 'Cars', 'Housing', 'Embroidery', 'Hunting', 'Fishing', 'Cinema', 'Collections', 'and', 'ancient',
           'objects', 'Sewing', 'Cooking,', 'gastronomy', 'Drawing', 'Digital', 'Economy', 'Genealogy', 'High-tech',
           'Computer', 'science', 'Gardening', 'Board', 'games', 'Video', 'games', 'Reading', 'Creative', 'hobbies',
           'Business', 'Management', 'Music', 'boating', 'Painting', 'Photography', 'Scrapbooking', 'Sport', 'Television',
           'knitting', 'Video,', 'editing', 'Wine,', 'oenology', 'traveling']
Music = ['classical', 'Jazz', 'Rap', 'Reggae', 'Rock', 'Rhythm', 'Blues,', 'funk', 'Techno', 'French varieties',
         'International varieties']
Sports = ['Athletics', 'Rowing', 'Badminton', 'Basketball', 'Boxing', 'Cycling', 'Dance', 'Horse', 'riding', 'Fencing',
          'Soccer', 'Golf', 'Gymnastic', 'Handball', 'Disabled', 'Sports', 'Hockey', 'Judo', 'Karate', 'Kayak',
          'bodybuilding', 'Swimming', 'bowling', 'Windsurfing,', 'surfing', 'Hiking', 'Roller', 'Rugby', 'Ski',
          'Motor', 'sports', 'Squash', 'Tennis', 'Table', 'tennis', 'Archery', 'Sail', 'Volleyball', 'ATV']
cars = ['4x4', 'Sedan', 'Convertible', 'Chopped', 'off', 'People', 'Carrier', 'Motorbike', 'Small', 'car', 'road',
        'Scooter', 'Medium', 'car']

data = data + Animals + Fanof + Musicalinstruments + readings + Hobbies + Music + Sports + cars
#Metiers
metiers = ['Aeronautics', 'Food And Catering', 'Agriculture hunting fishing and farming', 'Crafts',
           'Arts and entertainment', 'Building', 'Trade', 'Law', 'Edition', 'Teaching and research',
           'Business', 'Interview', 'Finance', 'Printing', 'Industry', 'Computer science', 'Language and writing',
           'Marketing and communication', 'Media', 'Politics', 'Undertakers', 'Health',
           'Sciences', 'Security', 'Social', 'Sports', 'Tourism', 'Transport and logistics',
           'Illegal activities', 'Animals', 'Fanof', 'Musical instruments', 'readings', 'Hobbies', 'Music', 'Sports', 'cars']

Aeronautics = ['Astronaut', 'cosmonaut', 'astronaut', 'Air', 'Controller', 'Air', 'conveyor',
             'Stewardess,', 'flight', 'attendant', 'Aeronautic', 'engineer', 'Aircraft', 'mechanic', 'Air',
             'Navigator', 'Pilot', 'Fighter', 'pilot', 'Helicopter', 'pilot']
FoodAndCatering = ['Bartender', 'Butcher', 'Baker', 'Baker', 'pork', 'butcher', 'Chocolatier', 'Clerk',
                   'Confectioner', 'crêpier', 'Food', 'critic', 'Cook', 'Dietitian', 'chip', 'entremetier',
                   'cheesemonger', 'Pantry', 'Glacier', 'corkscrew', 'confectioner', 'pizzaiolo', 'Diver',
                   'Fishmonger', 'Primeur', 'restaurateur', 'roaster', 'Saucier', 'Server', 'wine', 'waiter',
                   'Culinary', 'tester', 'caterer']
Agriculturehuntingfishingfarming = ['Farmer', 'Beekeeper', 'aquaculturist', 'Shepherd', 'Hunter', 'grower', 'Farmer',
                                    'farmer', 'horticulturist', 'Agronomist', 'Forest', 'engineer',
                                    'Gardener', 'mussel', 'oyster', 'Grounds', 'Sinner', 'Nurseryman', 'forester',
                                    'Viticulturalist', ' winemaker']
Crafts = ['Piano', 'tuner', 'Archetier', 'Gunsmith', 'Jeweler', 'Brodeur', 'ceramist', 'milliner', 'coppersmith',
                 'chaser', 'Hairdresser', 'Shoemaker', 'corsetry', 'costume', 'Cutler', 'dressmaker', 'Roofer',
                 'locksmith', 'Cook', 'dentellier', 'Dinancier', 'Cabinetmaker', 'illuminator', 'beautician',
                 'Évantailliste', 'Instrument', 'factor', 'ironworker', 'Black-smith', 'glover', 'Watchmaker',
                 'Lapidary', 'Laqueur', 'luthier', 'Builder', 'Makeup', 'artist', 'makeup', 'Maroquinier',
                 'marquetry', 'Carpenter', 'model', 'maker', 'Milliner', 'Goldsmith', 'Perruquier', 'posticheur',
                 'plumassier', 'Potter', 'Bookbinder', 'Restorer', 'restoration', 'objects',
                 'Sculptor', 'saddler', 'Locksmith', 'saddler', 'setter', 'Tailor', 'Tanner', 'Taxidermist', 'Dry',
                 'cleaner', 'Weaver', 'Cooper', 'basket-maker', 'glass-blower', 'Stained', 'Sailboat', 'saddler']
Artsandentertainment = [' Instrument', 'tuner', 'props', 'Actor', 'Acrobat', 'Show', 'host', 'Landscape',
                        'architect', 'Artificer', 'Author', 'Librarian', 'buzzer', 'Cameraman', 'Singer', 'clown',
                        'Actor', 'Composer', 'Museum', 'curator', 'Dancer', 'Designer', 'Designate', 'Artistic',
                        'director', 'Gallery', 'director', 'Casting', 'director', 'Tamer', 'Dialogue', 'lighting',
                        'Editor', 'contained', 'engraver', 'graphic', 'artist', 'Humorist', 'Illustrator', 'Copycat',
                        'Graphic', 'Designer', 'Sound', 'engineer', 'Juggler', 'Makeup', 'artist', 'Director', 'Mime',
                        'Editor', 'Musician', 'Painter', 'Photographer', 'conjuror', 'Drama', ' drama teacher',
                        'Dance', 'teacher', 'projectionist', 'Director', 'Scriptwriter', 'Sculptor', 'Script']
Building = ['Land', 'developer', 'Architect', 'Landscape', 'architect', 'Interior', 'space', 'planner', 'insulator',
            'tiler', 'Carpenter', 'heating', 'engineer', 'cordiste', 'slater', 'Roofer', 'locksmith', 'Construction',
            'Economist', 'Electrician', 'Escaliéteur', 'roofer', 'façadier', 'refrigeration', 'geometer', 'Builder',
            'Carpenter', 'parqueteur', 'House', 'painter', 'plaquiste', 'Plasterer', 'Plumber', 'Real', 'estate',
            'developer', 'Ornamentalist', 'staffer', 'Stonecutter', 'Glazier']
Trade = ['Buyer', 'Help', 'cashier', 'Commercial', 'animator', 'Jeweler', 'watchmaker', 'Butcher', 'Baker',
         'tobacconist', 'Cashier', 'Cellar', 'pork', 'butcher', 'shoemaker', 'Department', 'manager', 'Commercial',
         'Shoemaker', 'Cuisiniste', 'Broker', 'creamer', 'Retailer', 'Record', 'Store', 'druggist', 'Grocer',
         'dresser', 'Florist', 'Cheese', 'artisan', 'Coffee', 'boy', 'Wholesaler', 'Sales', 'Engineer', 'Dairy',
         'Bookseller', 'Delivery', 'man', 'Newspaper', 'seller', 'Optician', 'confectioner', 'Fishmonger',
         'Telemarketer', 'Trader', 'caterer', 'Seller', 'Traveler representative placeman']
Law = ['Judiciary', 'Administrator', 'Lawyer', 'attorney', 'notary', 'clerk', 'Legal', 'expert', 'Clerk', 'Bailiff',
      'Judge', 'Family', 'judge', 'Sentencing', 'judge', 'Judge', 'children', 'Guardianship', 'judge', 'Magistrate',
      'Liquidator', 'Magistrate', 'Notary', 'prosecutor', 'Deputy', 'Prosecutor', 'General Substitute']
Editing =['Author', 'Manufacturing', 'Manager', 'corrector', 'Editorial', 'director', 'Collection', 'Director',
          'Editor', 'model', 'maker', 'reviewer', 'Editorial', 'manager']
Teachingandresearch = ['Help and Information', 'Head', 'laboratory', 'Searcher', 'Education', 'advisor',
                       'Psychological', 'guidance', 'counselor', 'Educational', 'senior', 'advisor', 'librarian',
                       'Teacher', 'Faculty', 'Member', 'Research', 'engineer', 'School', 'teacher/teacher', 'Lecturer',
                       'Professional', 'counselor', 'Professor', 'Principal', 'psychologist', 'supervisor',
                       'Laboratory technician']
Business = ['Buyer', 'purveyor', 'Administrative and financial director', 'Marketing', 'Director', 'Human',
            'Resources', 'Director', 'Accounting', 'Consolidator', 'overseer', 'Management control',
            'Administrative', 'employee', 'tax', 'expert', 'Logistician', 'Worker', 'President', 'CEO',
            'Quality', 'Engineer', 'Receptionist', 'Secretary', 'telephonist', 'Treasurer', 'Seller']
Interview = ['Sweeper', 'dustman', 'Surface', 'technician', 'Maid']
Finance = ['Actuary', 'Credit', 'analyst', 'Financial', 'Analyst', 'Insurance', 'agent', 'Stockbroker',
           'Auditor', 'trader', 'Account', 'Manager', 'Commercial', 'Auditor', 'Financial', 'Advisor', 'Tax',
           'advisor', 'Management', 'control', 'Risk', 'controller', 'Stock', 'broker', 'Insurance', 'broker',
           'Compliance', 'Officer', 'Agency', 'Director', 'Market', 'Director', 'Agency', 'network', 'director',
           'Commitment', 'Director', 'Financial', 'Insurance', 'employee', 'Bank', 'employee',
           'Accountant', 'Wealth', 'manager', 'Portfolio', 'manager', 'Financial', 'engineer', 'Notary',
           'Market', 'operator',  'trader', 'Treasurer']
printinghouse =['chromiste', 'keyboarder', 'Driver', 'Copyist', 'corrector', 'performer', 'Maker', 'Graphic',
                'Designer', 'linotype', 'Lithographer', 'Ludlowiste', 'model', 'maker', 'Feeder',
                'Massicotier', 'Editor', 'Incorporator', 'Operator', 'Photocompositeur', 'repro', 'pressman',
                'reviewer', 'Bookbinder', 'Silkscreen', 'Typographer']
Industry = ['Adjuster', 'automaticien', 'Chemist', 'Searcher', 'Designate', 'Electrician', 'hydraulics', 'Engineer', 'Sales',
                'Engineer', 'Chemical', 'Laborantin', 'Mechanic', 'Operator', 'Welder', 'Technician',
                'Technologist']
Computerscience = ['Database', 'administrator', 'Network', 'administrator',
                'System', 'administrator', 'Analyst', 'System', 'architect', 'IT', 'Project', 'Manager', 'cogniticien',
                'IT', 'consultant', 'developer', 'Technical', 'director', 'librarian', 'Software', 'ergonomist',
                'asset', 'manager', 'Graphic', 'Designer', 'Integrator', 'Programmer', 'Documentation', 'Writer',
                'Business', 'manager', 'Security', 'officer', 'Téléassistant', 'Network', 'technician', 'Tester',
                'Web', 'Designer', 'Webmaster']
Languageandwriting = ['Actor', 'Help', 'Information',
                'Librarian', 'Biographer', 'Calligraph', 'Singer', 'Actor', 'Storyteller', 'corrector', 'Literary',
                'criticism', 'librarian', 'Writer', 'Public', 'Writer', 'Editor', 'Printer', 'Computer',
                'Graphics', 'Interpreter', 'linguist', 'Translator', 'Typographer']
Marketingandcommunication = ['Art', 'buyer', 'Strategic', 'planner', 'Marketing', 'analyst', 'Communication', 'Manager',
                'Product', 'manager', 'Head', 'advertising', 'Designer', 'Editor', 'Designate', 'Artistic',
                'director', 'Creative', 'Director', 'Media-glider', 'roughman', 'Webmarketer']
Media = ['Television', 'animator', 'Cameraman', 'infopreneur', 'Sound', 'engineer', 'Journalist',
         'Photographer', 'Freelance', 'Producer', 'Director', 'Report', 'Copyeditor']
Politics = ['Parliamentary', 'Assistant','Chief of Staff', 'General', 'Counsel', 'City', 'councilor', 'National',
            'Councilor', 'Regional',  'Councilor', 'Deputy', 'Diplomat', 'Chief', 'Staff', 'Politician', 'Statesman', 'Mayor',
            'Prefect', 'minister', 'Prime', 'Minister', 'President', 'Confederation',
            'President of the Republic', 'Secretary', 'State', 'senator']
Undertaker = [ 'embalmer',  'Gravedigger']
Health = ['Anesthetist', 'Dental', 'assistant', 'Surgeon', 'Occupational', 'therapist',
                'Dental', 'Hygienist', 'Male', 'nurse', 'Respiratory', 'Therapist', 'physiotherapist', 'Laborantin',
                'Doctor', 'Speech', 'Therapist', 'osteopath', 'Pediatrician', 'Pharmacist', 'Parapharmacien',
                'Dentist', 'Psychiatrist', 'Psychologist', 'Midwife']
Science = [ 'anthropologist', 'archaeologist',
                'Astronomer', 'astrophysicist', 'Botanist', 'Biologist', 'Biochemist', 'biophysicist',
                'biomathematician', 'Searcher', 'Chemist', 'behaviourist', 'cryptologist', 'Egyptologist',
                'exobiologist', 'Explorer', 'Economist', 'ethologist', 'ethnologist', 'Geologist', 'glaciologist',
                'Mathematician', 'Meteorologist', 'paleontologist', 'Physicist', 'Refiner', 'Seismologist',
                'Sociologist', 'Statistician']
Security = ['Security', 'agent', 'ambulance', 'Executioner',
                'Detective', 'Minesweeper', 'Spy', 'Bodyguard', 'gendarme', 'Military', 'Police', 'officer',
                'Firefighter', 'Sheriff']
Social = ['Sociocultural', 'animator', 'Social', 'worker', 'Family', 'Maternal', 'assistant', 'Child', 'care',
          'assistant', 'Social and Family', 'Economy', 'Advisor', '(CESF)',
               'Guardianship', 'delegate', 'Special', 'educator', 'Early', 'childhood', 'educator', 'Educator',
               'monitor', 'Social and Family Intervention Technician (TISF)']
Sport = ['Arbitrator', 'Sports', 'trainer', 'High', 'mountain', 'guide', 'Sports', 'journalist', 'physiotherapist', 'Diving',
               'instructor', 'Sports', 'teacher', 'Professional', 'athlete']
Tourism = ['Travel', 'guide', 'Tourist',
               'animator', 'Tourist', 'welcome', 'agent', 'Reservation', 'agent', 'Tourism', 'cultural',
               'engineering', 'consultant', 'Director', 'tourist', 'office', 'Room', 'maid', 'Forfaitiste',
               'Tour', 'guide', 'High', 'mountain', 'guide', 'Governess', 'Hotel', 'restaurant']
Transportandlogistics = [ 'shipper', 'Train', 'commercial', 'agent', 'switchman', 'Air', 'trafic',
               'controller', 'Shipowner', 'waterman', 'truck', 'driver', 'Ship', 'captain', 'cariste', 'Charger',
               'Bus', 'driver', 'Delivery', 'driver', 'Truck', 'driver', 'Taxi', 'driver', 'Large', 'Discount',
               'Driver', 'Small', 'Discount', 'Driver', 'Funicular', 'train', 'conductor', 'Head', 'Service',
               'Captain', 'Train', 'conductor', 'Tram', 'driver', 'Controller', 'Fund', 'conveyor', 'Éclusier',
               'warehouse', 'owner', 'Mover', 'Docker', 'mechanic', 'Stewardess,', 'flight', 'attendant',
               'Logistician', 'Marine', 'storekeeper', 'Mechanic', 'Driving', 'school', 'instructor',
               'Péagiste', 'Airline', 'pilot', 'Gas', 'station', 'attendant', 'Regulator', 'Carrier']
Illegalactivities = ['Money launderer', 'Burglar', 'Smuggler', 'Dealer', 'drugs', 'slaver', 'Forger',
               'ferryman', 'Pickpocket', 'Hacker', 'procurer', 'receiver', 'Trafficker', 'Hitman', 'Thief', 'Prostitute']


def Matcheur(listeA, listeB):

    tla = len(listeA)
    tlb = len(listeB)

    commons, differents = getItems(listeA, listeB)
    commons = list(set(commons))
    differents = list(set(differents))
    tc = len(commons)
    td = len(differents)

    commoninA = tc/tla*100
    commoninB = tc/tlb*100

    match = tc/min(tla, tlb)*100

    print("Match rate: ", match, "%", ", pour les interets:", '\n', commons, '\n')
          # commoninA, "% en commun dans A", "\n", commoninB ,
          # "% en commun dans B", '\n')

    catematchsA = []
    catematchsB = []
    # for i in listeA:
    #     catematchsA = AddWord(i)
    # for i in listeB:
    #     catematchsB = AddWord(i)
    catematchsA = AddWord(listeA)
    catematchsA = list(set(catematchsA))
    catematchsB = AddWord(listeB)
    catematchsB = list(set(catematchsB))

    commonsC, differentsC = getItems(catematchsA, catematchsB)

    print("Pour les interets inscrits,", '\n',
          "Les categories de A sont: ", '\n', catematchsA, '\n', '\n',
          "celles de B: ",'\n', catematchsB, '\n', '\n',
          "les categories suivantes sont celles que vous avez en commun: ",'\n', commonsC, "\n", "\n",
          "les categories suivantes sont differentes mais peuvent vous rapprocher en fonction de vos interets: ",'\n', differentsC)
#
# n = random.randint(1, len(data))
# mot = data[n]
#
# print(n, mot)

def AddWord(lmot):
    catematchs = []
    for mot in lmot:
        if mot in Aeronautics:
            catematchs.append(metiers[0])
        if mot in FoodAndCatering:
            catematchs.append(metiers[1])
        if mot in Agriculturehuntingfishingfarming:
            catematchs.append(metiers[2])
        if mot in Crafts:
            catematchs.append(metiers[3])
        if mot in Artsandentertainment:
            catematchs.append(metiers[4])
        if mot in Building:
            catematchs.append(metiers[5])
        if mot in Trade:
            catematchs.append(metiers[6])
        if mot in Law:
            catematchs.append(metiers[7])
        if mot in Editing:
            catematchs.append(metiers[8])
        if mot in Teachingandresearch:
            catematchs.append(metiers[9])
        if mot in Business:
            catematchs.append(metiers[10])
        if mot in Interview:
            catematchs.append(metiers[11])
        if mot in Finance:
            catematchs.append(metiers[12])
        if mot in printinghouse:
            catematchs.append(metiers[13])
        if mot in Industry:
            catematchs.append(metiers[14])
        if mot in Computerscience:
            catematchs.append(metiers[15])
        if mot in Languageandwriting:
            catematchs.append(metiers[16])
        if mot in Marketingandcommunication:
            catematchs.append(metiers[17])
        if mot in Media:
            catematchs.append(metiers[18])
        if mot in Politics:
            catematchs.append(metiers[19])
        if mot in Undertaker:
            catematchs.append(metiers[20])
        if mot in Health:
            catematchs.append(metiers[21])
        if mot in Security:
            catematchs.append(metiers[22])
        if mot in Social:
            catematchs.append(metiers[23])
        if mot in Sport:
            catematchs.append(metiers[24])
        if mot in Tourism:
            catematchs.append(metiers[25])
        if mot in Transportandlogistics:
            catematchs.append(metiers[26])
        if mot in Illegalactivities:
            catematchs.append(metiers[27])
        if mot in Animals:
            catematchs.append(metiers[28])
        if mot in Fanof:
            catematchs.append(metiers[29])
        if mot in Musicalinstruments:
            catematchs.append(metiers[30])
        if mot in readings:
            catematchs.append(metiers[31])
        if mot in Hobbies:
            catematchs.append(metiers[32])
        if mot in Music:
            catematchs.append(metiers[33])
        if mot in Sports:
            catematchs.append(metiers[34])
        if mot in cars:
            catematchs.append(metiers[35])
        else:
            pass
    return catematchs

# catematchs = AddWord(mot)
# print("le metier ", mot, " se retrouve dans les categories", catematchs)

def getItems(listeA, listeB):
    la = listeA
    lb = listeB
    la = list(set(la))
    lb = list(set(lb))
    lc = []
    if la != [] and lb != []:
        for i in la:
            for j in lb:
                if i == j:
                    lc.append(i)
        lc = list(set(lc))

        for i in lc:
            la.remove(i)
            lb.remove(i)

    else:
        return " "

    ld = la + lb

    return lc, ld
#
# la = ["a", "b", "c", "f", "e"]
# lb = ["a", "b", "c", "f", "e"]


la = [
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))]
    ]

lb = [
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))],
    data[random.randint(1, len(data))], data[random.randint(1, len(data))], data[random.randint(1, len(data))]
    ]

print("\n","Les interets de A: ", '\n', la, "\n", "Ceux de B: ",'\n', lb, "\n")

Matcheur(la, lb)